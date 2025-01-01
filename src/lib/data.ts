import { DefaultSelectType, MethodTypeProps, NetworkProps } from "./common";
import KES from '../../public/assets/currencies/KES.png';
import BIRR from '../../public/assets/currencies/BIRR.png';
import BTC from '../../public/assets/currencies/BTC.png';
import ETH from '../../public/assets/currencies/ETH.png';
import SOL from '../../public/assets/currencies/SOL.png';
import SOM from '../../public/assets/currencies/SOM.png';
import ZAR from '../../public/assets/currencies/ZAR.jpg';

import EtB from '../../public/assets/currencies/svg/ETB.svg';
import KeS from '../../public/assets/currencies/svg/KES.svg';
import ZaR from '../../public/assets/currencies/svg/ZAR.svg';
import SoM from '../../public/assets/currencies/svg/SOM.svg';
import UsdT from '../../public/assets/currencies/svg/USDT.svg';


import Mpesa from '../../public/assets/payments/mpesa.svg'
import airtel from '../../public/assets/payments/airtel.svg'
import equitel from '../../public/assets/payments/equitel.svg'

export const fiatCurrencies: DefaultSelectType[] = [
    { id: 1, title: 'Kenyan Shilling', imgUrl: KeS, name: 'KES', value: 'kes' },
    { id: 2, title: 'U.S Dollar', imgUrl: SoM, name: 'USD', value: 'usd' },
    { id: 3, title: 'Ethopian Birr', imgUrl: EtB, name: 'ETB', value: 'etb' },
    { id: 4, title: 'S.A Rand', imgUrl: ZaR, name: 'ZAR', value: 'zar' },
];
export const cryptoCurrencies: DefaultSelectType[] = [
    { id: 1, title: 'Tether', imgUrl: UsdT, name: 'USDT', value: 'usdt' },
    { id: 2, title: 'Bitcoin', imgUrl: BTC, name: 'BTC', value: 'btc' },
    { id: 3, title: 'Ethereum', imgUrl: ETH, name: 'ETH', value: 'eth' },
    { id: 4, title: 'Solana', imgUrl: SOL, name: 'SOL', value: 'sol' },
];
export const methods: DefaultSelectType[] = [
    { id: 1, name: 'Payment Method 1', value: 'PM1' },
    { id: 2, name: 'Payment Method 2', value: 'PM2' },
    { id: 3, name: 'Payment Method 3', value: 'PM3' },
    { id: 4, name: 'Bank Transfer', value: 'Bank Transfer' },
    { id: 5, name: 'Mobile Payment', value: 'Mobile Payment' },
];

export const phoneCode: DefaultSelectType[] = [
    { id: 1, imgUrl: SOM, name: '+252', value: '252' },
    { id: 2, imgUrl: KES, name: '+254', value: '254' },
    { id: 3, imgUrl: ZAR, name: '+27', value: '245' },
    { id: 4, imgUrl: BIRR, name: '+251', value: '000' },
];

export const cryptoNetworks: NetworkProps[] = [
        {
            name: "Ethereum",
            code: "ERC20",
            block_confirmation: "12",
            min_deposit: "0.01 ETH",
            est: "5 minutes",
        },
        {
            name: "BNB Smart Chain",
            code: "BEP20",
            block_confirmation: "3",
            min_deposit: "0.001 BNB",
            est: "1 minute",
        },
        {
            name: "Bitcoin",
            code: "BTC",
            block_confirmation: "6",
            min_deposit: "0.0001 BTC",
            est: "30 minutes",
        },
        {
            name: "Polygon",
            code: "MATIC",
            block_confirmation: "64",
            min_deposit: "1 MATIC",
            est: "2 minutes",
        },
        {
            name: "Solana",
            code: "SOL",
            block_confirmation: "1",
            min_deposit: "0.01 SOL",
            est: "30 seconds",
        },
        {
            name: "Avalanche",
            code: "AVAX",
            block_confirmation: "3",
            min_deposit: "0.1 AVAX",
            est: "2 minutes",
        },
        {
            name: "Tron",
            code: "TRC20",
            block_confirmation: "1",
            min_deposit: "10 TRX",
            est: "1 minute",
        },
        {
            name: "Cardano",
            code: "ADA",
            block_confirmation: "15",
            min_deposit: "1 ADA",
            est: "10 minutes",
        },
        {
            name: "Polkadot",
            code: "DOT",
            block_confirmation: "6",
            min_deposit: "0.1 DOT",
            est: "5 minutes",
        },
        {
            name: "Litecoin",
            code: "LTC",
            block_confirmation: "6",
            min_deposit: "0.01 LTC",
            est: "15 minutes",
        },
    ];


export const paymentTypes: MethodTypeProps[] = [
    {id: 1, name: 'M-Pesa', value: 'mpesa', icon: Mpesa },
    {id: 2, name: 'Airtel Money', value: 'airtel', icon: airtel },
    {id: 3, name: 'Equitel Money', value: 'equitel', icon: equitel },
]
