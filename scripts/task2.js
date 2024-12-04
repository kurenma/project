document.getElementById('check_volumes').addEventListener('click', function() {
    const A = parseFloat(document.getElementById('cube_edge').value);
    const R = parseFloat(document.getElementById('cylinder_radius').value);
    const H = parseFloat(document.getElementById('cylinder_height').value);
    const M = parseFloat(document.getElementById('liquid_volume').value);

    console.log(M, R, H, M)

    const volumeCube = Math.pow(A, 3);
    const volumeCylinder = Math.PI * Math.pow(R, 2) * H;

    const canFillCube = M <= volumeCube;
    const canFillCylinder = M <= volumeCylinder;

    let resultText = "Результат:";
    resultText += canFillCube ? "Кубическая ёмкость может быть заполнена." : "Кубическая ёмкость не может быть заполнена.";
    resultText += canFillCylinder ? "Цилиндрическая ёмкость может быть заполнена." : "Цилиндрическая ёмкость не может быть заполнена.";

    document.getElementById('result').value = resultText;;
});