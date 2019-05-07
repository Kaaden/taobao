const fontSize = () => {
    let deviceWidth = document.documentElement.offsetWidth;
    if (deviceWidth > 1920) {
        deviceWidth = 1920;
    }
    let fontsize = deviceWidth / 19.2;
    document.documentElement.style = `font-size:${fontsize}px`
    console.log(fontsize);
}