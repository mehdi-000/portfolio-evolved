export const vertex = `
    uniform float uPointSize;
    
    varying vec2 vTextureCoords;

    attribute vec3 initPosition;

    uniform float uProgress;
    
    void main() {
        #include <begin_vertex>

        transformed = initPosition + ((position - initPosition) * uProgress);

        #include <project_vertex>
    
        gl_PointSize = uPointSize;

        vTextureCoords = position.xy;
    }
    `;
