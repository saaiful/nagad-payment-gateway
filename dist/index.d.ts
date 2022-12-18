import { INagadConstructor, ICreatePaymentArgs } from './interfaces/main.interface';
import { INagadPaymentVerificationResponse } from './interfaces/nagadResponse.interface';

declare class NagadGateway {
    private readonly baseURL;
    private readonly merchantID;
    private readonly merchantNumber;
    private readonly pubKey;
    private readonly privKey;
    private readonly headers;
    private readonly callbackURL;
    constructor(config: INagadConstructor);
    /**
     * ## Initiate a Payment from nagad
     *
     * @param createPaymentConfig Arguments for payment creation
     * @example
     * ```javascript
     * const paymentConfig: ICreatePaymentArgs = {
     *   amount: '100',
     *   ip: '10.10.0.10',
     *   orderId: '12111243GD',
     *   productDetails: { a: '1', b: '2' },
     *   clientType: 'PC_WEB',
     * };
     * const paymentURL = await nagad .createPayment(paymentConfig);
     * ```
     * @returns `Payment URL for nagad`
     *
     */
    createPayment(createPaymentConfig: ICreatePaymentArgs): Promise<string>;
    verifyPayment(paymentRefID: string): Promise<INagadPaymentVerificationResponse>;
    private confirmPayment;
    private encrypt;
    private decrypt;
    private sign;
    private getTimeStamp;
    private createHash;
    private genKeys;
    private formatKey;
}

export { NagadGateway, NagadGateway as default };
