class Calculator {
  initComponents() {
    document.getElementById("num1").value = 0;
    document.getElementById("num2").value = 0;
    document.getElementById("result").textContent = 0;
  }

  getComponentValues() {
    return { 
      num1: parseInt(document.getElementById("num1").value),
      num2: parseInt(document.getElementById("num2").value)
    }
  }

  getResult() {
    const { num1, num2 } = this.getComponentValues();

    if (num1 === 0 && num2 === 0) {
      alert('Invalid result');
      return;
    }

    return num1 + num2;
  }
  
  resetResult() {
    document.getElementById("result").textContent = 0;
  }
}

const calc = new Calculator();
calc.initComponents();

function getResult() { document.getElementById("result").textContent = calc.getResult(); }
function resetResult() { calc.resetResult(); }