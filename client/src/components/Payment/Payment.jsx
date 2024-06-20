import React from 'react'
import GooglePayButton from '@google-pay/button-react'
import './Payment.css'
const Payment = () => {
    return (
        <div>
            <GooglePayButton
                environment="TEST"
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                        {
                            type: 'CARD',
                            parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                            },
                            tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: 'example',
                                    gatewayMerchantId: 'exampleGatewayMerchantId',
                                },
                            },
                        },
                    ],
                    merchantInfo: {
                        merchantId: '12345678901234567890',
                        merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                        totalPriceStatus: 'FINAL',
                        totalPriceLabel: 'Total',
                        totalPrice: '100.00',
                        currencyCode: 'USD',
                        countryCode: 'US',
                    },
                    callbackIntents:['PAYMENT_AUTHORIZATION']

                }}
                onLoadPaymentData={paymentRequest => {
                    console.log('load payment data', paymentRequest);
                }}
                onPaymentAuthorized={paymentData=>{
                    console.log(paymentData)
                    return {transactionState:'SUCCESS'}
                }}
                existingPaymentMethodRequired='false'
                buttonColor='Black'
                buttonType='buy'
            />
        </div>
    )
}

export default Payment