import { Container } from '../../globalStyles';
import { Btn } from './styles';

const About = () => {
    return (
        <Container>
            <div style={{ flexDirection: 'column' }}>
                <h2>
                   Sobre a Rede <span>Social</span>
                </h2>
                <p>Este projeto consiste em um blog ( CRUD ) feito com React no Front-End e Firebase como banco de dados.</p>
                <p style={{ fontWeight: '600' }}>
                Se você gostou, não esqueça de visitar meu Linkedin e GitHub para saber mais sobre o que eu faço, obrigada.
                </p>
                <Btn style={{ background: '#161b22' }} href="https://www.linkedin.com/in/adrianabeatriz3/">
                    Linkedin
                </Btn>
                <Btn style={{ background: '#0a66c2' }} href="https://github.com/driica">
                    GitHub
                </Btn>
            </div>
        </Container>
    );
};

export default About;
