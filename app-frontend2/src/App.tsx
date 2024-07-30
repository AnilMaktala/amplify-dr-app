import { useState, useEffect } from 'react'
import './App.css'
import { Amplify } from 'aws-amplify';
import { AuthUser, signInWithRedirect, getCurrentUser, signOut } from 'aws-amplify/auth';
import { Hub } from "aws-amplify/utils";
import '@aws-amplify/ui-react/styles.css';
import Blogs from './components/blogs.tsx';

Amplify.configure({
  // us-east-1
  Auth: {
    Cognito: {
      userPoolClientId: '4edtg3mjoou726phfp01mu6hi6',
      userPoolId: 'us-east-1_cQuOLforN',
      loginWith: {
        oauth: {
          domain: 'amplify2.auth.us-east-1.amazoncognito.com',
          scopes: ['aws.cognito.signin.user.admin', 'openid', 'email', 'profile', 'phone'],
          redirectSignIn: ['http://localhost:5173', 'https://main.d3e2f2iroaofvi.amplifyapp.com/', 'amplify.dshimko.com'],
          redirectSignOut: ['http://localhost:5173'],
          responseType: 'code'
        },
        email: true
      }
    }
  },
  API: {
    GraphQL: {
      endpoint: 'https://zvrolcjeevca5mqbcn32xdtocy.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'userPool',
    }
  }
});

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
          console.log(error);
          break;
        case "customOAuthState":
          setCustomState(payload.data);
          console.log(customState);
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
      <button onClick={() => signInWithRedirect({provider: { custom: 'AzureADB2C'}})}>Open Hosted UI</button>
      <button onClick={() => signOut()}>Sign Out</button>
      {user ? (
        <div>
          <div><b>User:</b> {user?.username}</div>
          <Blogs/>
        </div>
      ): null}
      
    </div>
  );
};

export default App;