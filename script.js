* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    min-height: 100vh;
    font-family: "Trebuchet MS", Arial, sans-serif;
    background:
        radial-gradient(circle at top, #44215f, #170d2b 55%, #080611);
    color: white;
    overflow-x: hidden;
    text-align: center;
}

.container {
    position: relative;
    z-index: 5;
    width: 90%;
    max-width: 850px;
    margin: auto;
    padding: 70px 20px 40px;
}

.small-text {
    font-size: 17px;
    opacity: 0.8;
    letter-spacing: 2px;
    animation: fadeIn 2s ease;
}

h1 {
    margin-top: 25px;
    font-size: clamp(55px, 13vw, 125px);
    line-height: 0.85;
    font-weight: 900;
    letter-spacing: 5px;
    text-shadow:
        0 0 10px #ffb7ef,
        0 0 30px #ff4fd8,
        0 0 60px #ff1493;
    animation: titleGlow 2s infinite alternate;
}

h1 span {
    font-size: 0.75em;
}

h2 {
    margin-top: 25px;
    font-size: clamp(35px, 8vw, 70px);
    color: #ffd6f6;
    text-shadow: 0 0 25px #ff4fd8;
}

.cake-area {
    margin: 45px auto 25px;
    height: 230px;
    position: relative;
}

.cake {
    position: relative;
    width: 230px;
    margin: auto;
    top: 45px;
}

.cake-body {
    height: 80px;
    background: linear-gradient(#ff91c8, #e95a9e);
    border-radius: 15px 15px 8px 8px;
    box-shadow: 0 10px 25px rgba(255, 69, 170, 0.4);
}

.cake-bottom {
    height: 25px;
    background: #ffd0e9;
    border-radius: 0 0 15px 15px;
}

.icing {
    position: absolute;
    top: 0;
    width: 230px;
    height: 40px;
    background: #fff0fa;
    border-radius: 50%;
    z-index: 3;
}

.cake-top {
    position: absolute;
    top: 5px;
    width: 100%;
    z-index: 4;
    font-size: 18px;
}

.candles {
    position: absolute;
    display: flex;
    gap: 30px;
    justify-content: center;
    width: 100%;
    top: -55px;
    z-index: 5;
}

.candle {
    width: 13px;
    height: 55px;
    border-radius: 4px;
    background: repeating-linear-gradient(
        45deg,
        #ffffff,
        #ffffff 7px,
        #ff4f9a 7px,
        #ff4f9a 14px
    );
    position: relative;
}

.flame {
    position: absolute;
    width: 16px;
    height: 23px;
    background: #ffd84d;
    border-radius: 50% 50% 50% 0;
    transform: rotate(-45deg);
    top: -22px;
    left: -2px;
    box-shadow: 0 0 15px #ffae00, 0 0 30px #ff6600;
    animation: flicker 0.5s infinite alternate;
}

button {
    border: none;
    padding: 16px 28px;
    border-radius: 40px;
    background: linear-gradient(135deg, #ff4fa3, #9c4dff);
    color: white;
    font-size: 17px;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 8px 25px rgba(255, 50, 180, 0.4);
    transition: 0.3s;
}

button:hover {
    transform: scale(1.07);
}

.message {
    margin: 45px auto 20px;
    padding: 35px;
    max-width: 700px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255,255,255,0.15);
    box-shadow: 0 10px 50px rgba(0,0,0,0.25);
    line-height: 1.8;
    font-size: 18px;
}

.message p {
    margin-bottom: 20px;
}

.message .love {
    color: #ffc1e7;
}

.message .final {
    font-size: 22px;
    font-weight: bold;
    color: #ffd5ef;
}

.heart {
    font-size: 45px;
    animation: heartbeat 1s infinite;
}

footer {
    margin-top: 25px;
    opacity: 0.6;
    font-size: 14px;
}

.balloon {
    position: fixed;
    bottom: -100px;
    font-size: 55px;
    z-index: 2;
    animation: floatUp linear infinite;
}

.b1 { left: 5%; animation-duration: 12s; }
.b2 { left: 18%; animation-duration: 16s; animation-delay: 2s; }
.b3 { left: 35%; animation-duration: 13s; animation-delay: 5s; }
.b4 { right: 25%; animation-duration: 15s; animation-delay: 1s; }
.b5 { right: 10%; animation-duration: 11s; animation-delay: 4s; }
.b6 { right: 2%; animation-duration: 17s; animation-delay: 6s; }

.confetti {
    position: fixed;
    width: 10px;
    height: 15px;
    top: -20px;
    z-index: 20;
    animation: fall linear forwards;
}

@keyframes floatUp {
    from {
        transform: translateY(0) rotate(0deg);
    }

    to {
        transform: translateY(-120vh) rotate(360deg);
    }
}

@keyframes flicker {
    from {
        transform: rotate(-45deg) scale(1);
    }

    to {
        transform: rotate(-40deg) scale(1.15);
    }
}

@keyframes heartbeat {
    0%, 100% {
        transform: scale(1);
    }

    50% {
        transform: scale(1.2);
    }
}

@keyframes titleGlow {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(1.03);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes fall {
    to {
        transform: translateY(110vh) rotate(720deg);
        opacity: 0;
    }
}

@media (max-width: 600px) {

    .container {
        padding-top: 45px;
    }

    .message {
        padding: 25px 18px;
        font-size: 16px;
    }

    .cake-area {
        transform: scale(0.85);
    }

    .balloon {
        font-size: 40px;
    }
}
