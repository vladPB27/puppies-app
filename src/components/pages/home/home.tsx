import styled from 'styled-components';

const HomeText = styled.div`
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-shadow: 1px 1px 1px #000;
`;

export default function Home() {


    return (
        <>
            <div className='bg-home'>
                <HomeText>
                    <p>ALL ABOUT</p>
                    <p>YOUR PUPPIES</p>
                </HomeText>
            </div>
            <div>
                <p>FOOTER</p>
            </div>
        </>
    )
}