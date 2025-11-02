type Props = { onBack?: () => void };

export default function CharacterMode({ onBack }: Props) {
    return (
        <div style={{ padding: 24, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Character Mode (Template)</h2>
            <p>Template content for Character Mode.</p>
            <button onClick={onBack} style={{ marginTop: 16 }}>Back</button>
        </div>
    );
}