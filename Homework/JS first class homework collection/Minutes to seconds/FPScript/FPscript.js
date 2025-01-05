function minTosec() {
  let minutes = document.getElementById(`minutes`).value;

  if (minutes && !isNaN(minutes)) {
    let seconds = minutes * 60;

    document.getElementById(`display1`).value = seconds;
  } else {
    alert(`Please enter a valid number`);
  }
}

function UPER() {
  let value = document.getElementById(`up`).value;

  if (value && !isNaN(value)) {
    let Dis2 = ++value;

    document.getElementById(`display2`).value = Dis2;
  } else {
    alert(`Please enter a valid number`);
  }
}

function triArea() {
  let Lenght = document.getElementById(`base`).value;
  let Height = document.getElementById(`height`).value;

  if ((Lenght && !isNaN(Lenght), Height && !isNaN(Height))) {
    let Area = 0.5 * Lenght * Height;
    document.getElementById(`display3`).value = Area;
  } else {
    alert(`Please enter valid numbers`);
  }
}

function calcpari() {
  let SideA = document.getElementById(`lapA`).value;
  let SideB = document.getElementById(`lapB`).value;

  if (SideA && !isNaN(SideA) && SideB && !isNaN(SideB)) {
    let Parimetar = 2 * (SideB + SideA);
    document.getElementById(`display4`).value = Parimetar;
  } else {
    alert(`Please enter valid numbers`);
  }
}

function CircArea() {
  let radius = document.getElementById(`plate`).value;
  if (radius && !isNaN(radius)) {
    var PlateArea = 3.141592 * (radius * radius);
    document.getElementById(`display5`).value = PlateArea;
  } else {
    alert(`Please enter valid numbers`);
  }
}
