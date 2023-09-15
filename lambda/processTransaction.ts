import { SQSEvent } from 'aws-lambda';
import Web3 from 'web3';
import { generateEthereumKeys } from '../src/utils/ethereumUtils';
import dotenv from 'dotenv';

dotenv.config();

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY!;
const WEB3_PROVIDER_URL = process.env.WEB3_PROVIDER_URL!;

const web3 = new Web3(new Web3.providers.HttpProvider(`${WEB3_PROVIDER_URL}${ALCHEMY_API_KEY}`));

export const handler = async (event: SQSEvent): Promise<void> => {
    for (const record of event.Records) {
        const messageBody = JSON.parse(record.body);

        const to = messageBody.to;
        const value = messageBody.value;

        const { privateKey } = generateEthereumKeys(); 

        const txParams = {
            nonce: '0x00',  
            gasPrice: '0x09184e72a000',
            gasLimit: '0x2710',
            to: to,
            value: value,
            data: '0x0'
        };

        const signedTx = await web3.eth.accounts.signTransaction(txParams, privateKey);

        web3.eth.sendSignedTransaction(signedTx.rawTransaction!)
            .on('receipt', receipt => {
                console.log('Transação confirmada!', receipt);
            })
            .on('error', error => {
                console.error('Erro ao enviar a transação:', error);
            });
    }
};
