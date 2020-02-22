function solve() {
    let a = +prompt("Xin nhập hệ số a", "");
    let b = +prompt("Xin nhập hệ số b", "");
    let c = + prompt("Xin nhập hệ số c")
    if (a === 0) {
        if ( b === 0) {
            alert("Đây không phải là phương trình bậc 2")
        } else {
            alert("Nghiệm của phương trình là " + -c / b);
        }
    } else {
        let delta = b * b - a * c * 4;
        if (delta < 0) {
            alert("Phương trình vô nghiệm");
        } else if (delta === 0) {
            alert("Phương trình có nghiệm kép là: " + -b / a * 2);
        } else {
            alert("Phương trình có nghiệm x1 là: " + (-b + Math.sqrt(delta)) / (2 * a));
            alert("Phương trình có nghiệm x2 là: " + (-b - Math.sqrt(delta)) / (2 * a));
        }
    }

}
