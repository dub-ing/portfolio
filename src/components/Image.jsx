function Image({src, width, alt, icon}) {
    return (
      <div class={width}>
        {icon}
        <img src={src} alt={alt} />
      </div>
    );
}

export default Image
