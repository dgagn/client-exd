import { useEffect } from "react";
import usePersistantStore, { PersistantStoreState } from "../store/use-persistant-store";
import shallow from "zustand/shallow";

const colorState = ({ setPrimary, setContrast, primary, contrast }: PersistantStoreState) => ({ setPrimary, setContrast, primary, contrast })

export default function useColors() {
    const contrastColors = [
        { color: 'cool-gray', name: 'gris-froid' },
        { color: 'warm-gray', name: 'gris-chaud' },
        { color: 'true-gray', name: 'vrai-gris' },
        { color: 'blue-gray', name: 'bleu-gris' },
        { color: 'gray', name: 'gris' },
    ]

    const primaryColors = [
        { color: 'purple', name: 'mauve' },
        { color: 'pink', name: 'rose' },
        //'yellow',
        { color: 'blue', name: 'bleu' },
        //'amber',
        { color: 'cyan', name: 'cyan' },
        { color: 'emerald', name: 'émeraude' },
        { color: 'fuchsia', name: 'fuchsia' },
        { color: 'green', name: 'vert' },
        { color: 'indigo', name: 'indigo' },
        { color: 'orange', name: 'orange' },
        //'lime',
        //'red',
        { color: 'sky', name: 'ciel' },
        { color: 'teal', name: 'sarcelle' },
        { color: 'violet', name: 'violet' },
        { color: 'rose', name: 'Rose' },
    ];

    const options = usePersistantStore(colorState, shallow)

    useEffect(() => {
        document.body.setAttribute('color-primary', options.primary);
    }, [options.primary])

    useEffect(() => {
        document.body.setAttribute('color-contrast', options.contrast);
    }, [options.contrast])

    return {
        primaryColors,
        contrastColors,
        ...options
    };
}