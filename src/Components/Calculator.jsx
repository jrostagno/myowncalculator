import React, { useState } from "react";
import styles from "./Calculatos.module.css";
import { BsBackspace } from "react-icons/bs";

const Calculator = () => {
  const [secondInput, setSecondInput] = useState("");
  const [firstInput, setFirstInput] = useState("0");
  const [operator, setOperator] = useState("");

  const [show, setShow] = useState(true);

  function handleClick(e) {
    if (operator && firstInput === "") {
      setFirstInput("0");
    }

    if (operator !== "") {
      setShow(false);
      setSecondInput(secondInput.concat(e.target.value));
    } else {
      if (firstInput[0] === "0" && e.target.value === ".") {
        setFirstInput(firstInput.concat(e.target.value));
      } else if (e.target.value !== 0 && firstInput === "0") {
        setFirstInput(e.target.value);
      } else {
        setFirstInput(firstInput.concat(e.target.value));
      }
    }
  }

  function handleClickC() {
    setFirstInput("0");
    setSecondInput("");
    setOperator("");
    setShow(true);
  }

  function handleOperator(e) {
    setOperator(e.target.value);
    setSecondInput("");
  }

  function handleExpo(e) {
    if (operator !== "x^2" && operator !== "") {
      setSecondInput(Math.pow(parseInt(secondInput), 2));
      return () => handleResult();
    } else {
      setOperator(e.target.value);
      setFirstInput(Math.pow(parseInt(firstInput), 2));
      setShow(true);
    }
  }

  function handleSquare(e) {
    if (operator !== "r2" && operator !== "") {
      setSecondInput(Math.sqrt(parseInt(secondInput)));
      return () => handleResult();
    } else {
      setOperator(e.target.value);

      setFirstInput(Math.sqrt(parseInt(firstInput)));
      setShow(true);
    }
  }

  function handleReci(e) {
    setOperator(e.target.value);

    setFirstInput(1 / parseInt(firstInput));
    setShow(true);
  }

  function handleNegate() {
    setFirstInput(parseInt(firstInput) * -1);
    setShow(true);
  }

  function handleBack() {
    if (!show) {
      const array = secondInput.toString().split("");

      array.pop();
      setSecondInput(!array.length ? "0" : array.join(""));
    } else {
      const array = firstInput.toString().split("");

      array.pop();
      setFirstInput(!array.length ? "0" : array.join(""));

      setShow(true);
    }
  }

  function handleResult() {
    if (operator === "x" && secondInput) {
      setFirstInput(parseInt(firstInput) * parseInt(secondInput));
      setShow(true);
    }

    if (operator === "/" && secondInput) {
      setFirstInput(parseInt(firstInput) / parseInt(secondInput));
      setShow(true);
    }

    if (operator === "-" && secondInput) {
      setFirstInput(parseInt(firstInput) - parseInt(secondInput));
      setShow(true);
    }

    if (operator === "+" && secondInput) {
      setFirstInput(parseInt(firstInput) + parseInt(secondInput));
      setShow(true);
    }
    if (operator === "x^2") {
      setFirstInput(Math.pow(parseInt(firstInput), 2));
      setShow(true);
    }

    if (operator === "r2") {
      setFirstInput(Math.sqrt(parseInt(firstInput)));
      setShow(true);
    }

    if (operator === "1/x") {
      setFirstInput(1 / parseInt(firstInput));
      setShow(true);
    }
  }

  return (
    <div className={styles.contCalculator}>
      <h1 className={styles.display}>{show ? firstInput : secondInput}</h1>
      <div className={styles.contButtons}>
        <div className={styles.buttons}>
          <button className={styles.btn}>%</button>
        </div>
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleClickC}>
            C
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn}>CE</button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleBack}>
            <BsBackspace />
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleReci} value="1/x">
            1/x
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleExpo} value="x^2">
            x^2
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleSquare} value="r2">
            r2
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button
            className={styles.btn}
            onClick={operator === "/" ? handleResult : handleOperator}
            value="/"
          >
            /
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleClick} value="7">
            7
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleClick} value="8">
            8
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleClick} value="9">
            9
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button
            className={styles.btn}
            onClick={operator === "x" ? handleResult : handleOperator}
            value="x"
          >
            x
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleClick} value="4">
            4
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleClick} value="5">
            5
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleClick} value="6">
            6
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button
            className={styles.btn}
            onClick={operator === "-" ? handleResult : handleOperator}
            value="-"
          >
            -
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleClick} value="1">
            1
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleClick} value="2">
            2
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleClick} value="3">
            3
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button
            className={styles.btn}
            onClick={operator === "+" ? handleResult : handleOperator}
            value="+"
          >
            +
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleNegate} value="+/-">
            +/-
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleClick} value="0">
            0
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleClick} value=".">
            .
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
