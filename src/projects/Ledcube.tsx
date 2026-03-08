export default function Ledcube() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-8">LED Cube Project</h1>
      <p className="text-lg text-gray-600 mb-4">
        This is a 3D LED cube project that I built using Arduino and addressable RGB LEDs. The cube consists of multiple layers of LEDs that can display various
        patterns and animations.
      </p>
      <img src="/ledcube.png" alt="LED Cube" className="w-1/2 rounded-lg shadow-lg" />
    </div>
  );
}
