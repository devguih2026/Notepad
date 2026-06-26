// functions like getNotas(), createNota(), deleteNota()

import api from './api'

export async function buscarNotas() {
    const response = await api.get('/notas/')
    return response.data
}

export async function buscarNotasPorId(id) {
    const response = await api.get(`/notas/${id}/`)
    return response.data
}

export async function criarNotas(dados) {
    const response = await api.post('/notas/', dados)
    return response.data
}

export async function atualizarNota(id, dados) {
    const response = await api.put(`/notas/${id}/`, dados)
    return response.data
}

export async function deletarNota(id) {
    await api.delete(`/notas/${id}/`)
}