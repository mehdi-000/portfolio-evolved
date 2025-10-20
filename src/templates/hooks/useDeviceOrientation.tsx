"use client";

import { useCallback, useEffect, useState } from "react";

type DeviceOrientation = {
  alpha: number | null;
  beta: number | null;
  gamma: number | null;
  absolute: boolean | null;
};

type UseDeviceOrientationData = {
  orientation: DeviceOrientation | null;
  error: Error | null;
  requestAccess: () => Promise<boolean>;
  revokeAccess: () => Promise<void>;
};

declare global {
  interface DeviceOrientationEvent {
    requestPermission?: () => Promise<"granted" | "denied">;
  }
}

export const useDeviceOrientation = (): UseDeviceOrientationData => {
  const [error, setError] = useState<Error | null>(null);
  const [orientation, setOrientation] = useState<DeviceOrientation | null>(
    null
  );

  const onDeviceOrientation = (event: DeviceOrientationEvent): void => {
    setOrientation({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
      absolute: event.absolute,
    });
  };

  const revokeAccessAsync = async (): Promise<void> => {
    window.removeEventListener("deviceorientation", onDeviceOrientation);
    setOrientation(null);
  };

  const requestAccessAsync = async (): Promise<boolean> => {
    if (typeof DeviceOrientationEvent === "undefined") {
      setError(
        new Error("Device orientation event is not supported by your browser")
      );
      return false;
    }

    // Check for requestPermission method
    if (
      typeof (DeviceOrientationEvent as any).requestPermission === "function"
    ) {
      let permission: "granted" | "denied";
      try {
        permission = await (DeviceOrientationEvent as any).requestPermission();
      } catch (err) {
        setError(err as Error);
        return false;
      }
      if (permission !== "granted") {
        setError(
          new Error("Request to access the device orientation was rejected")
        );
        return false;
      }
    }

    window.addEventListener("deviceorientation", onDeviceOrientation);

    return true;
  };

  const requestAccess = useCallback(requestAccessAsync, []);
  const revokeAccess = useCallback(revokeAccessAsync, []);

  useEffect(() => {
    return (): void => {
      revokeAccess();
    };
  }, [revokeAccess]);

  return {
    orientation,
    error,
    requestAccess,
    revokeAccess,
  };
};
