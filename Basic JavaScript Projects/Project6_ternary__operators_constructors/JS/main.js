function Compressor(type, maker, model) {
    this.compressorType = type;
    this.companyName = maker;
    this.modelName = model;
    document.getElementById("comp").innerHTML = companyName; 
}