const eyes = document.querySelectorAll(".eye .pupil");
const mouth = document.querySelector(".mouth");

document.addEventListener("mousemove", (e) => {
    let x = e.clientX / window.innerWidth - 0.5;
    let y = e.clientY / window.innerHeight - 0.5;

    eyes.forEach(eye => {
        eye.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
    });

    // 입을 여는 조건: 커서가 중앙에서 멀어질수록 입이 커짐
    let mouthSize = Math.abs(x) + Math.abs(y);
    mouth.style.height = `${20 + mouthSize * 40}px`;
});
