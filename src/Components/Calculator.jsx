import React, { useState } from "react";
import styles from "./Calculatos.module.css";
import { BsBackspace } from "react-icons/bs";
import { FaSquareRootAlt } from "react-icons/fa";
import { CgMathDivide } from "react-icons/cg";

// import raiz from "../assets/square.png";

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
      if (show) {
        setShow(false);
        setSecondInput(e.target.value);
      } else {
        setSecondInput(secondInput.concat(e.target.value).slice(0, 12));
      }
    } else {
      if (firstInput[0] === "0" && e.target.value === ".") {
        setFirstInput(firstInput.concat(e.target.value).slice(0, 12));
      } else if (e.target.value !== 0 && firstInput === "0") {
        setFirstInput(e.target.value);
      } else {
        setFirstInput(firstInput.concat(e.target.value).slice(0, 12));
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
    if (e.target.value !== operator && operator !== "") {
      handleResult();
      setOperator(e.target.value);
      setSecondInput("");
    } else {
      setOperator(e.target.value);
    }
  }

  function handleExpo(e) {
    if (operator !== "^2" && operator !== "") {
      if (Math.pow(parseInt(secondInput), 2).toString().length > 10) {
        setSecondInput(Math.pow(parseInt(secondInput), 2).toExponential());

        setShow(true);
        return () => handleResult();
      } else {
        setSecondInput(Math.pow(parseInt(secondInput), 2));

        return () => handleResult();
      }
    } else {
      setOperator(e.target.value);
      if (Math.pow(parseInt(firstInput), 2).toString().length > 10) {
        setFirstInput(Math.pow(parseInt(firstInput), 2).toExponential(5));
        setShow(true);
      } else {
        setFirstInput(Math.pow(parseInt(firstInput), 2));
        setShow(true);
      }
    }
  }

  function handleSquare(e) {
    if (operator !== "r2" && operator !== "") {
      if (Math.sqrt(parseInt(secondInput)).toString().length > 10) {
        setSecondInput(Math.sqrt(parseInt(secondInput)).toExponential(5));

        return () => handleResult();
      } else {
        setSecondInput(Math.sqrt(parseInt(secondInput)));

        return () => handleResult();
      }
    } else {
      setOperator(e.target.value);
      if (Math.sqrt(parseInt(firstInput)).toString().length > 10) {
        setFirstInput(Math.sqrt(parseInt(firstInput)).toExponential(5));
        setShow(true);
      } else {
        setFirstInput(Math.sqrt(parseInt(firstInput)));
        setShow(true);
      }
    }
  }

  function handleReci(e) {
    setOperator(e.target.value);

    if ((1 / parseInt(firstInput)).toString().length > 10) {
      setFirstInput((1 / parseInt(firstInput)).toExponential(5));
      setShow(true);
    } else {
      setFirstInput(1 / parseInt(firstInput));
      setShow(true);
    }
  }

  function handleNegate() {
    if (firstInput !== "0") {
      setFirstInput(firstInput * -1);
      setShow(true);
    }
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

  // function handleKey(e) {
  //   console.log(e);
  //   if (
  //     e.key === "1" ||
  //     e.key === "2" ||
  //     e.key === "3" ||
  //     e.key === "4" ||
  //     e.key === "5" ||
  //     e.key === "6" ||
  //     e.key === "7" ||
  //     e.key === "8" ||
  //     e.key === "9" ||
  //     e.key === "0" ||
  //     e.key === "."
  //   ) {
  //     handleClick(e);
  //   }

  //   // if (e.key === "+") {
  //   //   operator === "+" ? handleResult() : handleOperator(e);
  //   // }
  //   // if (e.key === "-") {
  //   //   operator === "-" ? handleResult() : handleOperator(e);
  //   // }
  //   // if (e.key === "*") {
  //   //   operator === "x" ? handleResult() : handleOperator(e);
  //   // }

  //   // if (e.key === "/") {
  //   //   operator === "/" ? handleResult() : handleOperator(e);
  //   // }

  //   // if (e.key === "Enter") handleResult();
  // }

  function handleResult() {
    if (operator === "x" && secondInput) {
      if (
        (parseInt(firstInput) * parseInt(secondInput)).toString().length > 10
      ) {
        setFirstInput(
          parseFloat(
            parseInt(firstInput) * parseInt(secondInput)
          ).toExponential(5)
        );

        setShow(true);
      } else {
        if (Number.isInteger(firstInput * secondInput)) {
          setFirstInput(parseInt(firstInput) * parseInt(secondInput));

          setShow(true);
        } else {
          setFirstInput(parseFloat(firstInput * secondInput).toFixed(2));
          setShow(true);
        }
      }
    }

    if (operator === "/" && secondInput) {
      if (
        parseInt(parseInt(firstInput) / parseInt(secondInput)).toString()
          .length > 10
      ) {
        setFirstInput((firstInput / secondInput).toExponential(5));

        setShow(true);
      } else if (Number.isInteger(firstInput / secondInput)) {
        setFirstInput(firstInput / secondInput);
        setShow(true);
      } else {
        setFirstInput((firstInput / secondInput).toFixed(2));

        setShow(true);
      }
    }

    if (operator === "-" && secondInput) {
      if (
        parseInt(parseInt(firstInput) - parseInt(secondInput)).toString()
          .length > 10
      ) {
        setFirstInput((firstInput - secondInput).toExponential(5));
        setShow(true);
      } else if (Number.isInteger(firstInput - secondInput)) {
        setFirstInput(firstInput - secondInput);

        setShow(true);
      } else {
        setFirstInput((firstInput - secondInput).toFixed(2));
        setShow(true);
      }
    }

    if (operator === "+" && secondInput) {
      if ((firstInput + secondInput).toString().length > 10) {
        setFirstInput(
          (parseInt(firstInput) + parseInt(secondInput)).toExponential(5)
        );
        setShow(true);
      } else if (Number.isInteger(firstInput + secondInput)) {
        setFirstInput(firstInput + secondInput);

        setShow(true);
      } else {
        setFirstInput(parseInt(firstInput) + parseInt(secondInput));
        setShow(true);
      }
    }

    if (operator === "^2") {
      if (Math.pow(parseInt(firstInput), 2).toString().length > 10) {
        setFirstInput(Math.pow(parseInt(firstInput), 2).toExponential(5));
        setShow(true);
      } else {
        setFirstInput(Math.pow(parseInt(firstInput), 2));
        setShow(true);
      }
    }

    if (operator === "r2") {
      setFirstInput(Math.sqrt(parseInt(firstInput)));
      setShow(true);
    }

    if (operator === "1/x") {
      if (setFirstInput(1 / parseInt(firstInput)).toString().length > 10) {
        setFirstInput((1 / parseInt(firstInput)).toExponential(5));
        setShow(true);
      } else {
        setFirstInput(1 / parseInt(firstInput));
        setShow(true);
      }
    }
  }

  return (
    <div
      className={styles.contCalculator}
      // onKeyPress={handleKey}
      // onKeyDown={handler}
    >
      <div className={styles.contDisplay}>
        <h1 className={styles.display}>{show ? firstInput : secondInput}</h1>
        <span>{`${firstInput}${operator}${secondInput}`}</span>
      </div>

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
          <button className={styles.btn} onClick={handleClickC}>
            CE
          </button>
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
          <button className={styles.btn} onClick={handleExpo} value="^2">
            x^2
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button className={styles.btn} onClick={handleSquare} value="r2">
            {/* <img src={raiz} alt="raiz" width="35" heigth="35" /> */}
            <FaSquareRootAlt />
          </button>
        </div>{" "}
        <div className={styles.buttons}>
          <button
            className={styles.btn}
            onClick={operator === "/" ? handleResult : handleOperator}
            value="/"
          >
            <CgMathDivide />
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
