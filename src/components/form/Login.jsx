import { useContext, useRef, useState } from "react";
import { Button, Card, Col, Form, FormGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../services/authentication/authentication.context";


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        email: false,
        password: false,
    });

    const { handleEmailLogin } = useContext(AuthenticationContext); 

  const [error, setError] = useState(null);

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const navigate = useNavigate();

    const emailHandler = (event) => {
        setEmail(event.target.value);
        setErrors({ ...errors, email: false});
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        setErrors({ ...errors, password: false});
    }

    const loginHandler =(event) => {
      console.log("executed")
        event.preventDefault();
        if (emailRef.current.value.length === 0) {
            setErrors({ ...errors, email: true});
            alert("EMAIL INVALIDO");
            emailRef.current.focus();
            return;
        }

        if (!password.length) {
            setErrors({ ...errors, password: true});
            alert("PASSWORD INVALIDO");
            passwordRef.current.focus();
            return;
        }

        handleLogin(email, password);
        handleEmailLogin(email);
        navigate("/comments");
    };

    const handleLogin = async (email, password) => {
      try {
        const res = await    fetch("https://localhost:7120/api/Authentication", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
  
  
        if (!res.ok) {
          throw res;
        }
  
  
        const data = await res.text();
  
        localStorage.setItem("bookchampions-token", data);
        setError(null);
  
  
        return true;
      } catch (error) {
        setError(error.status);
        return false;
      }
    };
  

  return (
    <Card className="w-25 mt-5 mx-3 p-3 px-5 shadow">
      <Card.Body>
        <Row>
          <h5>¡Bienvenidos a Books Champion!</h5>
        </Row>
        <Form onSubmit={loginHandler}>
          <FormGroup className="mb-4">
            <Form.Control
            type="email"
            placeholder="Ingresar email"
            value={email}
            onChange={emailHandler}
            className={errors.email && "border border-danger border-5"}
            ref={emailRef}
            />
          </FormGroup>
          <FormGroup className="mb-4">
            <Form.Control
              type="password"
              placeholder="Ingresar contraseña"
              value={password}
              onChange={passwordHandler}
              className={errors.password && "border border-danger border-5"}
              ref={passwordRef}
            />
          </FormGroup>
          <Row>
          <Col />
          <Col md={6} className="d-flex justify-content-end">
            <Button variant="secondary" type="submit">
              Iniciar sesión
            </Button>
          </Col>
        </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
