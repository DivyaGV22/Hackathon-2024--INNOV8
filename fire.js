<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Fire Effect Animation</title>
<style>
  body {
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #111;
    overflow: hidden;
  }

  /* Container for the fire effect */
  .fire-container {
    position: relative;
    width: 100px;
    height: 150px;
  }

  /* Fire base and layers */
  .fire {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 100%, #ff9d00, transparent 70%);
    opacity: 0.8;
    border-radius: 50%;
    animation: flicker 1.5s infinite ease-in-out;
  }

  /* Different layers for realistic fire flicker effect */
  .fire:nth-child(1) {
    transform: scale(1);
    animation-delay: 0s;
  }

  .fire:nth-child(2) {
    transform: scale(1.2);
    animation-delay: 0.5s;
    background: radial-gradient(circle at 50% 80%, #ff6100, transparent 70%);
  }

  .fire:nth-child(3) {
    transform: scale(1.4);
    animation-delay: 1s;
    background: radial-gradient(circle at 50% 60%, #ff2400, transparent 80%);
  }

  /* Keyframes for flickering effect */
  @keyframes flicker {
    0%, 100% {
      opacity: 0.8;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
    75% {
      opacity: 0.6;
      transform: scale(1.05);
    }
  }
</style>
</head>
<body>

<div class="fire-container">
  <div class="fire"></div>
  <div class="fire"></div>
  <div class="fire"></div>
</div>

</body>
</html>
