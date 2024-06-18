import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "change-case-small-caps" is now active!');

    let disposable = vscode.commands.registerCommand('extension.toSmallCaps', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;

            const text = document.getText(selection);
            const smallCapsText = toSmallCaps(text);

            editor.edit(editBuilder => {
                editBuilder.replace(selection, smallCapsText);
            });
        }
    });

    context.subscriptions.push(disposable);
}

function toSmallCaps(text: string): string {
    const smallCapsMap: { [key: string]: string } = {
        'a': 'ᴀ', 'b': 'ʙ', 'c': 'ᴄ', 'd': 'ᴅ', 'e': 'ᴇ', 'f': 'ꜰ',
        'g': 'ɢ', 'h': 'ʜ', 'i': 'ɪ', 'j': 'ᴊ', 'k': 'ᴋ', 'l': 'ʟ',
        'm': 'ᴍ', 'n': 'ɴ', 'o': 'ᴏ', 'p': 'ᴘ', 'q': 'ϙ', 'r': 'ʀ',
        's': 's', 't': 'ᴛ', 'u': 'ᴜ', 'v': 'ᴠ', 'w': 'ᴡ', 'x': 'x',
        'y': 'ʏ', 'z': 'ᴢ',
        'A': 'ᴀ', 'B': 'ʙ', 'C': 'ᴄ', 'D': 'ᴅ', 'E': 'ᴇ', 'F': 'ꜰ',
        'G': 'ɢ', 'H': 'ʜ', 'I': 'ɪ', 'J': 'ᴊ', 'K': 'ᴋ', 'L': 'ʟ',
        'M': 'ᴍ', 'N': 'ɴ', 'O': 'ᴏ', 'P': 'ᴘ', 'Q': 'ϙ', 'R': 'ʀ',
        'S': 's', 'T': 'ᴛ', 'U': 'ᴜ', 'V': 'ᴠ', 'W': 'ᴡ', 'X': 'x',
        'Y': 'ʏ', 'Z': 'ᴢ'
    };

    return text.split('').map(char => smallCapsMap[char] || char).join('');
}

export function deactivate() {}
