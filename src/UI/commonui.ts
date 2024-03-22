import styled from 'styled-components';

interface Titprops {
    imgs: string
}

export const Business = styled.a`
    position: relative;
    display: block;
    width: 100%;
    height: 300px;
    background-color: rgba(255,255,255,.1);
    padding: 20px 20px;
    cursor: pointer;
    &:hover button {
        background-color: #eec252;
        border: none;
        svg {
            path {
                fill: #000;
            }
        }
    }
    h1 {
        width: 40px;
        height: 40px;
        background: url('../images/icon.png') no-repeat center/cover;
        margin-bottom: 20px;
    }
    h2 {
        color: #fff;
        font-size: 30px;
        font-weight: 900;
        padding-bottom: 30px;
    }
    h3 span {
        color: rgba(255,255,255,.5);
    }
    button {
        position: absolute;
        bottom: 20px;
        right: 20px;
        padding: 10px;
        border-radius: 50%;
        border: 1px solid #fff;
            svg {
                path {
                    fill: #fff;
                }
            }
        }
    @media screen and (max-width: 1280px) {
        h1 {
            width: 30px;
            height: 30px;
        }
        h2 {
            font-size: 20px;
        }
        h3 {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 1024px) {
        height: 400px;
        h2 {
            font-size: 15px;
        }
    }
`;

export const Board = styled.div`
    border-bottom: 1px solid rgba(255,255,255,.2);
    a {
        display: block;
        width: 100%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 0;
        .spans {
            display: flex;
            align-items: center;
            > div:first-child {
                width: 150px;
                background-color: #ffc123;
                text-align: center;
                color: #000;
                line-height: 48px;
                border-radius: 30px;
                margin-right: 20px;
            }
        }
    }
    @media screen and (max-width: 656px) {
        a > div:last-child {
            display: none !important;
        }
        a > div.spans {
            flex-direction: column;
            align-items: start;
            > div:first-child {
                width: 50px !important;
                height: 20px;
                line-height: 20px;
                font-size: 12px;
            }
            > div:last-child {
                font-size: 12px;
                padding-top: 10px;
            }
        }
    }
`;

export const Titpart = styled.div<Titprops>`
    height: 600px;
    background: url('${props => props.imgs}') no-repeat center/cover;
    position: relative;
    .text {
        position: absolute;
            bottom: 0;
            left: 0;
            padding-bottom: 10%;
            padding-left: 5%;
            h2 {
                font-size: 50px;
                color: #fff;
                font-weight: 800;
                padding-bottom: 20px;
            }
            p {
                color: rgba(255,255,255,.5);
                font-size: 20px;
            }
    }
    @media screen and (max-width: 1024px) {
        .text {
            padding-bottom: 5% !important;
        }
        .text h2 {
            font-size: 30px !important;
        }
        .text p {
            font-size: 16px !important;
        }
        .text p br {
            display: none !important;
        }
    }
`;

export const Menupart = styled.div`
    position: absolute;
            bottom: 0;
            left: 0;
            background-color: #f5f7f9;
            transform: translateY(50%);
            z-index: 5;
            ul li a {
                padding: 40px;
                display: block;
                font-size: 18px;
                font-weight: 600;
                position: relative;
                color: rgba(0,0,0,.4);
                &.action {
                    color: rgba(0,0,0,1);
                    &:before {
                        content: '';
                        position: absolute;
                        display: block;
                        left: 40px;
                        right: 40px;
                        height: 3px;
                        background-color: #ffc123;
                        bottom: 20px;
                    }
                }
                &:after {
                    content: '';
                    position: absolute;
                    display: block;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 5px;
                    height: 5px;
                    background-color: #000;
                    border-radius: 50%;
                    right: 0;
                }
            }
            ul li:last-child a:after {
                content: none;
            }
        @media screen and (max-width: 1024px) {
            width: 100% !important;
            transform: translateY(100%) !important;
            ul li a {
                padding: 30px 40px !important;
            }
            ul li a:before {
                bottom: 0 !important;
                left: 0 !important;
                right: 0 !important;
            }
        }
        @media screen and (max-width: 600px) {
            ul li {
                width: 100% !important;
            }
            ul li a {
                padding: 24px 20px !important;
                text-align: center;
            }
            ul li a:after {
                content: none !important;
            }
        }
        @media (max-width: 440px) {
            ul {
                flex-direction: column;
            }
            ul li a {
                text-align: left !important;
            }
        }
`;

export const Tables = styled.table`
    width: 100%;
    thead tr {
        border-top: 1px solid #000;
        background-color: #f5f7f8;
    }
    thead tr td {
        text-align: center;
        padding: 30px 0;
        border-bottom: 1px solid rgba(0,0,0,.5);
    }
    thead tr td:first-child {
        width: 10%;
        border-right: 1px solid rgba(0,0,0,.5);
    }
    thead tr td:nth-child(2) {
        width: 60%;
        border-right: 1px solid rgba(0,0,0,.5);
    }
    thead tr td:last-child {
        width: 30%;
    }
    tbody tr {
        border-bottom: 1px solid rgba(0,0,0,.5);
    }
    tbody tr td:nth-child(2) {
        text-align: left;
        padding-left: 20px;
    }
    tbody tr td {
        padding: 20px 0;
        text-align: center;
    }
    tbody tr td:first-child {
        border-right: 1px solid rgba(0,0,0,.5);
    }
    tbody tr td:nth-child(2) {
        border-right: 1px solid rgba(0,0,0,.5);
    }
    @media screen and (max-width: 1024px) {
        thead {
            display: none !important;
        }
        tbody {
            border-top: 2px solid #000;
        }
        tbody tr td {
            border-right: none !important;
        }
        tbody tr {
            display: flex;
            justify-content: space-between !important;
            padding-bottom: 60px;
            position: relative;
        }
        tbody tr td:nth-child(1) {
            order: 3;
            font-weight: 800;
        }
        tbody tr td:nth-child(3) {
            order: 2;
            position: absolute;
            left: 20px;
            top: 50px;
        }
        tbody tr td:nth-child(2) {
            order: 1;
            font-weight: 800;
        }
    }
    @media screen and (max-width: 630px) {
        tbody tr td:nth-child(2) {
            width: 150px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;

export const Conpart = styled.div`
    position: relative;
    z-index: 1;
    background-color: #fff;
    padding: 150px 5% 0;
    > h2 {
        font-size: 50px;
        font-weight: 800;
        padding-bottom: 25px;
    }
    > p {
        font-size: 20px;
        padding-bottom: 30px;
    }
    @media screen and (max-width: 1024px) {
        > h2 {
            font-size: 30px !important;
        }
        > p {
            font-size: 15px !important;
        }
    }
    @media (max-width: 440px) {
        padding-top: 320px !important;
    }
`;

export const Device = styled.div`
    padding-top: 60px;
    display: flex;
    >h2 {
        font-size: 30px;
        font-weight: 800;
        line-height: 1;
        padding-right: 60px;
    }
   > div {
    p {
        font-weight: 700;
        font-size: 18px;
        padding-bottom: 30px;
    }
    ul {
        list-style: disc;
        padding-left: 20px;
        li {
            padding-bottom: 10px;
        }
    }
    > div {
        display: flex;
        flex-wrap: wrap;
        span {
            display: block;
            width: 49%;
            height: 23vw;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 95%;
            border: 1px solid #000;
            margin-bottom: 1%;
            &.img1 {
                background-image: url('https://www.heliosen.co.kr/static/media/digital1_1.6f6efc974abbf793b356.png');
            }
            &.img2 {
                background-image: url('https://www.heliosen.co.kr/static/media/digital2_2.14ae2704984c4b143eca.png');
            }
            &.img3 {
                background-image: url('https://www.heliosen.co.kr/static/media/digital2_1.65cc19d81b1a159b89f1.png');
            }
            &.img4 {
                background-image: url('https://www.heliosen.co.kr/static/media/digital1_2.437679868baff3d8c19f.png');
            }
        }
        span:nth-child(2n-1) {
            margin-right: 1%;
        }
    }
   }
   @media screen and (max-width: 1024px) {
        flex-direction: column;
        > h2 {
            font-size: 20px !important;
        }
        > div {
            display: flex;
            flex-direction: column;
            p {
                font-size: 15px !important;
                padding-top: 30px;
                font-weight: 500 !important;
            }
            ul {
                order: 3;
            }
            div {
                flex-direction: column;
            }
        }
   }
`;