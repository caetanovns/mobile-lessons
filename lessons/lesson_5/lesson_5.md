# Navegação e Hooks com React Native

- Adicionado post no feed do app
- Fluxo de autenticação
- Hook useState, useEffect, useMemo
  - Adicionar botão de like
  - Adicionar botão de save
  - Remover circulo do storie quando clicado
  - Entrega docente TDE 2
    - Construção da páginas:
      - Login, Tela principal da aplicação
      - Fluxo de login funcional

```js
 const [teste, setTeste] = useState(1);

    const { username, password } = route.params;

    useEffect(() => {
        const intervalId = setInterval(() => {
            // console.log('chamou');
            setTeste(t => t + 1);
        }, 1000)
        return () => clearInterval(intervalId);
        console.log("contou: " + teste);
    }, []);
    // console.log("renderizou" + teste);

    const valor_memorizado = useMemo(() => {
        return Date();
    }, []);

    useEffect(() => {
        console.log("Effect:" + Date());
    }, []);

    console.log("Memo: " + valor_memorizado);
```
