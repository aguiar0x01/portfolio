/*
 * @author: aguiar0x01
 * OBS: Lottie Animation by @user on GitHub
 */
export function loadAnimation() {
    fetch('./data/coding_animation_lottie.json')
    .then(response => response.json())
    .then(animationData => {
        lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData
        });
    });
}
