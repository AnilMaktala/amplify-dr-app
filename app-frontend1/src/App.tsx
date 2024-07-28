import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Amplify } from 'aws-amplify';
import { AuthUser, signInWithRedirect, getCurrentUser, signOut } from 'aws-amplify/auth';
import { generateClient, get } from 'aws-amplify/api';
import { listTodos, listBlogs } from './graphql/queries';
import { Hub } from "aws-amplify/utils";
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure({
  API: {
    REST: {
      AuthConfig: {
        endpoint: "https://j2n9p6tudh.execute-api.us-east-1.amazonaws.com"
      }
    }
  }
})

async function authConfig () {
  const headers = {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  };

  const restOperation = get({
    apiName: 'AuthConfig',
    path: '/prod/config',
  });

  const response = await restOperation.response;
  const data = await response.body.json();
  console.log('GET call succeeded: ', data);
  return data;
};

//const response = await authConfig();
//console.log(response.api.endpoint);
//console.log(response.api.region);

Amplify.configure({
  // us-east-1
  API: {
    GraphQL: {
      endpoint: 'https://5kza6neu7zfrna3waryy2zweqy.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-gvfgx7ulyjdobaikgxspszls3m'
    }
  },
  Auth: {
    Cognito: {
      userPoolClientId: '4edtg3mjoou726phfp01mu6hi6',
      userPoolId: 'us-east-1_cQuOLforN',
      loginWith: {
        oauth: {
          domain: 'amplify2.auth.us-east-1.amazoncognito.com',
          scopes: ['aws.cognito.signin.user.admin', 'openid', 'email', 'profile', 'phone'],
          redirectSignIn: ['http://localhost:5173'],
          redirectSignOut: ['http://localhost:5173'],
          responseType: 'code'
        },
        email: true
      }
    }
  }
  // us-west-2
  // API: {
  //   GraphQL: {
  //     endpoint: 'https://jzg4e5ikznbplcoryhmyrprggu.appsync-api.us-west-2.amazonaws.com/graphql',
  //     region: 'us-west-2',
  //     defaultAuthMode: 'apiKey',
  //     apiKey: 'da2-eapk5vufkjczvczusz5k7pvgp4'
  //   }
  // },
  // Auth: {
  //   Cognito: {
  //     userPoolClientId: '6gfim0bp1fmnk1g41hs3h61age',
  //     userPoolId: 'us-west-2_d3fc0CaKg',
  //     loginWith: {
  //       oauth: {
  //         domain: 'amplify2dr.auth.us-west-2.amazoncognito.com',
  //         scopes: ['aws.cognito.signin.user.admin', 'openid', 'email', 'profile', 'phone'],
  //         redirectSignIn: ['http://localhost:5173'],
  //         redirectSignOut: ['http://localhost:5173'],
  //         responseType: 'code'
  //       },
  //       email: true
  //     }
  //   }
  // }
});

//const client = generateClient();
//const result = await client.graphql({ query: listTodos });
//console.log(result);
//const result2 = await client.graphql({ query: listBlogs });
//console.log(result2);

function App() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [customState, setCustomState] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = Hub.listen("auth", ({ payload }) => {
      switch (payload.event) {
        case "signInWithRedirect":
          getUser();
          break;
        case "signInWithRedirect_failure":
          setError("An error has occurred during the Oauth flow.");
          break;
        case "customOAuthState":
          setCustomState(payload.data);
          break;
      }
    });

    getUser();

    return unsubscribe;
  }, []);

  const getUser = async (): Promise<void> => {
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      console.error(error);
      console.log("Not signed in");
    }
  };

  return (
    <div className="App">
      <button onClick={() => signInWithRedirect()}>Open Hosted UI</button>
      <button onClick={() => signOut()}>Sign Out</button>
      <div>{user?.username}</div>
    </div>
  );
}

export default App;

// export function App({ signOut, user }: WithAuthenticatorProps) {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <button onClick={() => signInWithRedirect(
//         {
//           provider: {
//             custom: "azure-ad-b2c-amplify-us-east-1"
//           }
//         }
//       )}>Azure AD</button>
//     </div>>
//     <Authenticator>
//       {({ signOut, user }) => (
//         <main>
//           <div>
//             <h1>Hello {user?.username}</h1>
//             <button onClick={signOut}>Sign out</button>
//           </div>
//           <div>
//             <a href="https://vitejs.dev" target="_blank">
//               <img src={viteLogo} className="logo" alt="Vite logo" />
//             </a>
//             <a href="https://react.dev" target="_blank">
//               <img src={reactLogo} className="logo react" alt="React logo" />
//             </a>
//           </div>
//           <h1>Vite + React</h1>
//           <div className="card">
//             <button onClick={() => setCount((count) => count + 1)}>
//               count is {count}
//             </button>
//             <p>
//               Edit <code>src/App.tsx</code> and save to test HMR
//             </p>
//           </div>
//           <p className="read-the-docs">
//             Click on the Vite and React logos to learn more
//           </p>
//         </main>
//       )}
//     </Authenticator>
//   )
// }

// export default withAuthenticator(App);
