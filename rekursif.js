function tampil(n) {
    if (n === 0) {
        return;
    }
    console.log(n);
    return tampil(n-1);
}
tampil(1000);