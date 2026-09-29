import { useState } from "react";
import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function App() {
    // Estado para guardar o texto digitado
    const [produto, setProduto] = useState("");

    // Estado para guardar a lista de produtos (Array de textos)
    const [listaProdutos, setListaProdutos] = useState([]);

    // Função para adicionar um produto à lista
    function adicionarProduto() {
        // Validação: impede a adição se o campo estiver vazio
        if (produto.trim() === "") {
            return;
        }

        // Adiciona o novo produto e limpa o campo de texto
        setListaProdutos((produtosAtuais) => [
            ...produtosAtuais,
            produto.trim(),
        ]);
        setProduto("");
    }

    // Função para remover um produto pelo seu índice
    function removerProduto(indexParaRemover) {
        setListaProdutos((produtosAtuais) =>
            produtosAtuais.filter((_, index) => index !== indexParaRemover)
        );
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.titulo}>🛒 Lista de Compras</Text>

            {/* Campo de Entrada de Texto e Botão */}
            <View style={styles.areaInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite um produto..."
                    placeholderTextColor="#888"
                    value={produto}
                    onChangeText={setProduto}
                />
                <Pressable
                    style={styles.botaoAdicionar}
                    accessibilityRole="button"
                    accessibilityLabel="Adicionar produto"
                    onPress={adicionarProduto}
                >
                    <Text style={styles.textoBotaoAdicionar}>ADICIONAR</Text>
                </Pressable>
            </View>

            {/* Área de Exibição dos Produtos */}
            <View style={styles.areaLista}>
                <Text style={styles.subtitulo}>
                    Produtos ({listaProdutos.length}):
                </Text>

                {listaProdutos.length === 0 ? (
                    <Text style={styles.textoVazio}>A sua lista está vazia.</Text>
                ) : (
                    listaProdutos.map((item, index) => (
                        <View key={index} style={styles.itemContainer}>
                            <Text style={styles.textoItem}>• {item}</Text>

                            <Pressable
                                style={styles.botaoRemover}
                                onPress={() => removerProduto(index)}
                            >
                                <Text style={styles.textoRemover}>❌</Text>
                            </Pressable>
                        </View>
                    ))
                )}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#f4f6f8",
        alignItems: "center",
        paddingTop: 60,
        paddingHorizontal: 20,
        paddingBottom: 40,
    },

    titulo: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#1a252c",
        marginBottom: 24,
    },

    areaInput: {
        flexDirection: "row",
        width: "100%",
        marginBottom: 24,
        alignItems: "center",
    },

    input: {
        flex: 1,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 10,
        paddingHorizontal: 16,
        height: 50,
        fontSize: 16,
        marginRight: 10,
    },

    botaoAdicionar: {
        backgroundColor: "#2e7d32",
        width: 110,
        height: 50,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    textoBotaoAdicionar: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },

    areaLista: {
        width: "100%",
    },

    subtitulo: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 12,
    },

    textoVazio: {
        fontSize: 15,
        color: "#777",
        fontStyle: "italic",
        textAlign: "center",
        marginTop: 20,
    },

    itemContainer: {
        backgroundColor: "#fff",
        padding: 14,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#e0e0e0",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    textoItem: {
        fontSize: 16,
        color: "#333",
    },

    botaoRemover: {
        padding: 4,
    },

    textoRemover: {
        fontSize: 16,
    },
});
