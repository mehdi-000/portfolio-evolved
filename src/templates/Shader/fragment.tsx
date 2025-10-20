export const fragment = `
  uniform sampler2D uTexture;
  varying vec2 vTextureCoords;
  uniform float uNbLines;
  uniform float uNbColumns;

  float circle(vec2 uv, float border) {
    float radius = 0.5;
    float dist = radius -distance(uv, vec2(0.5));
    return smoothstep(0.0, border, dist);
  }
    void main() {
        vec2 uv = gl_PointCoord;
        uv.y = -1.;
        uv /= vec2(uNbLines, uNbColumns);
        float textOffsetU = vTextureCoords.x / uNbLines;
        float textOffsetV = vTextureCoords.y / uNbColumns;
        uv += vec2(textOffsetU, textOffsetV);
        vec4 textureColor = texture2D(uTexture, uv);


        gl_FragColor = textureColor;
    /*     if (gl_FragColor.r < 0.03) discard; */

        gl_FragColor.a*= circle(gl_PointCoord, 0.2);
    }
    `;
