# Mangata

Create web application showing available tokens
The task is to create a simple web application displaying two lists:
1. A list of all tokens available on Mangata network with their information (name, total
   issuance)
2. A list of tokens owned by a user currently connected to the application with their
   information (name, balance)
   
Information about tokens should be retrieved from Mangata node, either publicly available or run
   locally.

   The application should be implemented in typescript using React library.
   For communication with Mangata node, Mangata SDK can be used. As an alternative, it is
   allowed to communicate with Mangata node directly through polkadot.js library.
   Graphical design and user experience of the application is not a part of the assessment.
   
Mangata WebSocket API is exposed at wss://integration.mangatafinance.cloud:9944. The API
   covers most of the exchange use cases, including retrieving token data. The node is also
   read-only accessible through Polkadot UI:
   https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fintegration.mangatafinance.cloud%3A9944#
   /explorer
   
Information which could be useful:
- Mangata is a decentralized exchange (DEX) based on constant product automated
  market maker technology.
- Mangata blockchain is implemented using the Substrate framework.
- Mangata SDK can be found here: https://github.com/mangata-finance/mangata-sdk
- Documentation for the SDK can be found here: https://docs.mangata.finance/sdk/
- Mangata node repo: https://github.com/mangata-finance/mangata-node Current version
  in `main` branch is different from publicly available node.
- Information about tokens is stored in `tokens` pallet (api.query.tokens)
- Tokens pallet is based on ORML tokens pallet
  https://github.com/open-web3-stack/open-runtime-module-library/tree/master/tokens
- Polkadot.js browser extensions is required for user to connect to UI
  
If you have any questions, feel free to contact me.

Please keep in mind that the primary goal of the task is to assess problem solving skills, not previous experience with similar technologies.
  
There are no limitations on time or resources used to complete the task, these are not a part of
  the assessment.

## Solution

I use Next.js to create proxy between Mangata SDK and FE application, because usage of Mangata SDK directly on FE causes problems with polyfill of BE node libraries (buffer, crypto).
I was trying to solve this polyfills by my own configuration of webpack but without success. 

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Getting Started

Instalation:

```bash
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/liquidity-tokens.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

### Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

### Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
