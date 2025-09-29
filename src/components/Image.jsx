function Image({src, alt, height, width}) {
    return (
        <img src={src} class={`${height} ${width} rounded-2xl`} alt={alt} />
    );
}

export default Image
