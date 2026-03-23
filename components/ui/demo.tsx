import CelestialInkShader from "@/components/ui/celestial-ink-shader";

export default function DemoOne() {
  return (
    <div className="app-container">
      <CelestialInkShader />
      <div className="overlay-content">
        <h1 className="title">Celestial Ink</h1>
        <p className="description">An Interactive WebGL Shader</p>
      </div>
    </div>
  );
}
