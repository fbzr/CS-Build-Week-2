for (let i=1; i<=100; i++) {
    if (i % 3 === 0 && i%5 === 0) {
        console.log("clearlyagile");
    } else if (i % 3 === 0) {
        console.log("clearly");
    } else if (i % 5 === 0) {
        console.log("agile");
    } else {
        console.log(i);
    }
}