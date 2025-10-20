function Image({src, alt, height, width}) {
    return (
        <img src={src} class={`${height} ${width} rounded-2xl object-cover`} alt={alt} />
    );
}

export default Image
