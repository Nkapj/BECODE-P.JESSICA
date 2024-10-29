const body = document.getElementsByTagName("body")[0];

const generateBG = (color,delay) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            body.style.backgroundColor = color;
            resolve();
    },delay)
});
}
generateBG("blue",1000);

const rain = async () => {
    await generateBG("blue", 1000);
    await generateBG("yellow", 1000);
    await generateBG("red", 1000);
    await generateBG("cyan", 1000);
    await generateBG("violet", 1000);
    await generateBG("green", 1000);
    await generateBG("purple", 1000);

}

rain();