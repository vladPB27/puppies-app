import styled from "styled-components"
import { Dog } from "../../../models/Dog"
import { CardStyled } from "../../styled-components/styledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBone } from "@fortawesome/free-solid-svg-icons";

const CardImage = styled.img`
    height: 150px;
    min-width: 180px;
    margin-top: 15px
`;

const colorTitle = {
    color: '#477084',
    fontSize: '18px'
}

interface Props {
    dog: Dog
}

export default function DogItem({ dog }: Props) {

    return (
        <>
            <CardStyled>
                <CardImage src={dog.image.url} loading="lazy" />
                <p style={colorTitle}>{dog.name} <span><FontAwesomeIcon icon={faBone} /></span></p>
                {dog.origin && <p style={{ textAlign: "left", paddingLeft: "30px" }}>
                    <span style={{fontWeight: 'bold'}}>Origin:</span> {dog.origin}
                </p>}
                {dog.bred_for && <p style={{ textAlign: "left", paddingLeft: "30px" }}>
                    <span style={{ fontWeight: "bold" }}>Bred for:</span> {dog.bred_for}
                </p>}
                {dog.life_span && <p style={{ textAlign: "left", paddingLeft: "30px" }}>
                    <span style={{ fontWeight: "bold" }}>Life span:</span> {dog.life_span}
                </p>}

            </CardStyled>
        </>
    )
}