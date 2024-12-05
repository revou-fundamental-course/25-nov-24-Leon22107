function Submit() {
  const berat = parseFloat(document.getElementById("berat").value);
  const tinggi = parseFloat(document.getElementById("tinggi").value);
  const gender = document.querySelector('input[name="gender"]:checked').value;

  if (isNaN(berat) || isNaN(tinggi)) {
    alert("Harap masukkan data valid!");
    return;
  }

  const bmi = berat / (tinggi / 100) ** 2;
  let kategori = "";

  if (bmi < 18.5) {
    kategori = "Berat Badan Kurang";
  } else if (bmi < 25) {
    kategori = "Berat Badan Ideal";
  } else if (bmi < 30) {
    kategori = "Berat Badan Berlebih";
  } else {
    kategori = "Obesitas";
  }

  const resultContent = `
        <p>Berat Badan Anda:<br/> <strong>${bmi.toFixed(
          1
        )}</strong> (${kategori})</p>
        <p>Hasil ini berlaku untuk ${gender === "pria" ? "Pria" : "Wanita"}.</p>
    `;

  document.getElementById("result").innerHTML = resultContent;
  document.getElementById("download").style.display = "block";
}
