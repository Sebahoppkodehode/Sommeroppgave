function convertWeight() {
  const weightInput = document.getElementById("weightInput").value;
  const planets = {
    sun: 27.01,
    mercury: 0.38,
    venus: 0.91,
    earth: 1,
    moon: 0.166,
    mars: 0.38,
    jupiter: 2.34,
    saturn: 1.06,
    uranus: 0.92,
    neptune: 1.19,
    pluto: 0.06,
  };

  const results = document.getElementById("results");
  results.style.display = "grid";
  results.style.gridTemplateColumns = "repeat(auto-fit, minmax(100px, 1fr))";
  results.style.gap = "10px";

  for (const planet in planets) {
    const planetWeight = (weightInput * planets[planet]).toFixed(2);
    const planetName = planet.charAt(0).toUpperCase() + planet.slice(1);
    document.getElementById(
      planet
    ).innerText = `${planetName}: ${planetWeight} kg`;
  }
}
