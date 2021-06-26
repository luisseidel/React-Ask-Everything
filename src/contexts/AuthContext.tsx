import { createContext, ReactNode, useEffect, useState } from "react";
import loadingGif from '../assets/images/loading50.gif';
import { auth, firebase } from "../services/firebase";

type User = {
    id: string;
	name: string;
	avatar: string;
}

type AuthContextType = {
    user: User | undefined;
	signInWithGoogle: () => Promise<void>;
}

type AuthContextProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);


export function AuthContextProvider(props: AuthContextProviderProps) {
    const [user, setUser] = useState<User>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				const { displayName, photoURL, uid } = user;

				if (!displayName || !photoURL) {
					throw new Error("Missin information: name or photo");
				}
	
				setUser({
					id: uid,
					name: displayName,
					avatar: photoURL
				});

				setLoading(false);
			}
		})

		return () => {
			unsubscribe();
		}

	}, []);

	async function signInWithGoogle() {
		const provider = new firebase.auth.GoogleAuthProvider();
		const result = await auth.signInWithPopup(provider);

		if (result.user) {
			const {displayName, photoURL, uid} = result.user;

			if (!displayName || !photoURL) {
				throw new Error("Missin information: name or photo");
			}

			setUser({
				id: uid,
				name: displayName,
				avatar: photoURL
			});
		}
	}

	if (loading) {
		return (
			<div className="center-loading">
				<img src={loadingGif} alt="Carregando" />
			</div>
		)
	}

    return (
        <AuthContext.Provider value={{ user, signInWithGoogle }}>
            { props.children }
        </AuthContext.Provider>
    );
}