import { useRouter } from 'expo-router';
import { useEffect, useState } from "react";
import FlashMessage from "react-native-flash-message";

export default function Main() {
    const router = useRouter();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        setIsReady(true);
    }, []);

    useEffect(() => {
        if (isReady) {
            router.replace("/screens/home");
        }
    }, [isReady, router]);

    return (
        null
        // <>
        //     <FlashMessage position="top" />
        // </>
    );
}