import React, { useState } from "react";
import {
  Book,
  Users,
  BookOpen,
  Search,
  Clock,
  TrendingUp,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

function BibliotecaDigital() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [searchTerm, setSearchTerm] = useState("");

  const [livros] = useState([
    {
      id: 1,
      titulo: "Clean Code",
      autor: "Robert Martin",
      isbn: "9780132350884",
      genero: "Tecnologia",
      disponiveis: 2,
      total: 3,
    },
    {
      id: 2,
      titulo: "O Senhor dos Anéis",
      autor: "J.R.R. Tolkien",
      isbn: "9780544003415",
      genero: "Fantasia",
      disponiveis: 0,
      total: 5,
    },
    {
      id: 3,
      titulo: "1984",
      autor: "George Orwell",
      isbn: "9780451524935",
      genero: "Ficção",
      disponiveis: 4,
      total: 4,
    },
  ]);

  const [emprestimos] = useState([
    {
      id: 1,
      livro: "Clean Code",
      usuario: "João Silva",
      dataEmprestimo: "01/11/2025",
      dataDevolucao: "08/11/2025",
      atrasado: true,
    },
    {
      id: 2,
      livro: "1984",
      usuario: "Maria Santos",
      dataEmprestimo: "05/11/2025",
      dataDevolucao: "19/11/2025",
      atrasado: false,
    },
  ]);

  const [reservas] = useState([
    { id: 1, livro: "O Senhor dos Anéis", usuario: "João Silva", posicao: 1 },
  ]);

  const livrosFiltrados = livros.filter(
    (livro) =>
      livro.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      livro.autor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      livro.genero.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderDashboard = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" }}>
        Dashboard
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "16px",
        }}
      >
        <div
          style={{
            background: "#eff6ff",
            padding: "24px",
            borderRadius: "8px",
            border: "1px solid #bfdbfe",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#2563eb",
                  fontWeight: "600",
                }}
              >
                Total de Livros
              </p>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#1e40af",
                }}
              >
                {livros.length}
              </p>
            </div>
            <Book color="#3b82f6" size={40} />
          </div>
        </div>

        <div
          style={{
            background: "#f0fdf4",
            padding: "24px",
            borderRadius: "8px",
            border: "1px solid #bbf7d0",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#16a34a",
                  fontWeight: "600",
                }}
              >
                Empréstimos Ativos
              </p>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#15803d",
                }}
              >
                {emprestimos.length}
              </p>
            </div>
            <BookOpen color="#22c55e" size={40} />
          </div>
        </div>

        <div
          style={{
            background: "#fefce8",
            padding: "24px",
            borderRadius: "8px",
            border: "1px solid #fde047",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#ca8a04",
                  fontWeight: "600",
                }}
              >
                Reservas
              </p>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#a16207",
                }}
              >
                {reservas.length}
              </p>
            </div>
            <Clock color="#eab308" size={40} />
          </div>
        </div>

        <div
          style={{
            background: "#fef2f2",
            padding: "24px",
            borderRadius: "8px",
            border: "1px solid #fecaca",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "14px",
                  color: "#dc2626",
                  fontWeight: "600",
                }}
              >
                Atrasados
              </p>
              <p
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#b91c1c",
                }}
              >
                {emprestimos.filter((e) => e.atrasado).length}
              </p>
            </div>
            <AlertCircle color="#ef4444" size={40} />
          </div>
        </div>
      </div>

      <div
        style={{
          background: "white",
          padding: "24px",
          borderRadius: "8px",
          border: "1px solid #e5e7eb",
        }}
      >
        <h3
          style={{
            fontSize: "18px",
            fontWeight: "600",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <AlertCircle color="#ef4444" />
          Empréstimos com Atraso
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {emprestimos
            .filter((e) => e.atrasado)
            .map((emp) => (
              <div
                key={emp.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px",
                  background: "#fef2f2",
                  borderRadius: "6px",
                  border: "1px solid #fecaca",
                }}
              >
                <div>
                  <p style={{ fontWeight: "600" }}>{emp.livro}</p>
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>
                    {emp.usuario} - Multa: R$ 6,00
                  </p>
                </div>
                <button
                  style={{
                    padding: "8px 16px",
                    background: "#dc2626",
                    color: "white",
                    borderRadius: "6px",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  Devolver
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );

  const renderBusca = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" }}>
        Buscar Livros
      </h2>

      <div style={{ display: "flex", gap: "8px" }}>
        <input
          type="text"
          placeholder="Buscar por título, autor ou gênero..."
          style={{
            flex: 1,
            padding: "8px 16px",
            border: "1px solid #d1d5db",
            borderRadius: "8px",
            fontSize: "16px",
          }}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          style={{
            padding: "8px 24px",
            background: "#2563eb",
            color: "white",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Search size={20} />
          Buscar
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {livrosFiltrados.map((livro) => (
          <div
            key={livro.id}
            style={{
              background: "white",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #e5e7eb",
              transition: "box-shadow 0.3s",
            }}
          >
            <h3
              style={{ fontSize: "18px", fontWeight: "bold", color: "#1f2937" }}
            >
              {livro.titulo}
            </h3>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              Autor: {livro.autor}
            </p>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              Gênero: {livro.genero}
            </p>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              ISBN: {livro.isbn}
            </p>

            <div
              style={{
                marginTop: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  padding: "4px 12px",
                  borderRadius: "9999px",
                  fontSize: "14px",
                  fontWeight: "600",
                  background: livro.disponiveis > 0 ? "#dcfce7" : "#fee2e2",
                  color: livro.disponiveis > 0 ? "#166534" : "#991b1b",
                }}
              >
                {livro.disponiveis > 0
                  ? `${livro.disponiveis} disponível`
                  : "Indisponível"}
              </span>
            </div>

            <div style={{ marginTop: "16px", display: "flex", gap: "8px" }}>
              <button
                disabled={livro.disponiveis === 0}
                style={{
                  flex: 1,
                  padding: "8px 16px",
                  background: livro.disponiveis === 0 ? "#d1d5db" : "#2563eb",
                  color: "white",
                  borderRadius: "6px",
                  border: "none",
                  cursor: livro.disponiveis === 0 ? "not-allowed" : "pointer",
                }}
              >
                Emprestar
              </button>
              <button
                disabled={livro.disponiveis > 0}
                style={{
                  flex: 1,
                  padding: "8px 16px",
                  background: livro.disponiveis > 0 ? "#d1d5db" : "#ca8a04",
                  color: "white",
                  borderRadius: "6px",
                  border: "none",
                  cursor: livro.disponiveis > 0 ? "not-allowed" : "pointer",
                }}
              >
                Reservar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderEmprestimos = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" }}>
        Empréstimos Ativos
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {emprestimos.map((emp) => (
          <div
            key={emp.id}
            style={{
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid",
              background: emp.atrasado ? "#fef2f2" : "white",
              borderColor: emp.atrasado ? "#fecaca" : "#e5e7eb",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
                  {emp.livro}
                </h3>
                <p style={{ fontSize: "14px", color: "#6b7280" }}>
                  Usuário: {emp.usuario}
                </p>
                <p style={{ fontSize: "14px", color: "#6b7280" }}>
                  Empréstimo: {emp.dataEmprestimo}
                </p>
                <p style={{ fontSize: "14px", color: "#6b7280" }}>
                  Devolução: {emp.dataDevolucao}
                </p>
                {emp.atrasado && (
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#dc2626",
                      fontWeight: "600",
                      marginTop: "8px",
                    }}
                  >
                    Atrasado! Multa: R$ 6,00
                  </p>
                )}
              </div>
              <button
                style={{
                  padding: "8px 16px",
                  background: "#16a34a",
                  color: "white",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <CheckCircle size={20} />
                Devolver
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderRecomendacoes = () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#1f2937",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <TrendingUp color="#9333ea" />
        Recomendações
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "16px",
        }}
      >
        {livros.slice(0, 3).map((livro) => (
          <div
            key={livro.id}
            style={{
              background: "linear-gradient(to bottom right, #faf5ff, #eff6ff)",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid #e9d5ff",
            }}
          >
            <h3 style={{ fontSize: "18px", fontWeight: "bold" }}>
              {livro.titulo}
            </h3>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              Autor: {livro.autor}
            </p>
            <p style={{ fontSize: "14px", color: "#6b7280" }}>
              Gênero: {livro.genero}
            </p>
            <p style={{ fontSize: "12px", color: "#9333ea", marginTop: "8px" }}>
              Baseado no seu histórico
            </p>
            <button
              style={{
                marginTop: "16px",
                width: "100%",
                padding: "8px 16px",
                background: "#9333ea",
                color: "white",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Ver Detalhes
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f3f4f6" }}>
      <div
        style={{
          background: "linear-gradient(to right, #2563eb, #9333ea)",
          color: "white",
          padding: "24px",
          boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <h1
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              margin: 0,
            }}
          >
            <Book size={36} />
            Sistema Biblioteca Digital
          </h1>
          <p style={{ color: "#dbeafe", marginTop: "8px" }}>
            Sprint 2 - Implementação Básica
          </p>
        </div>
      </div>

      <div
        style={{ background: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
        >
          <div style={{ display: "flex", gap: "4px" }}>
            {[
              { id: "dashboard", label: "Dashboard", icon: TrendingUp },
              { id: "busca", label: "Buscar Livros", icon: Search },
              { id: "emprestimos", label: "Empréstimos", icon: BookOpen },
              { id: "recomendacoes", label: "Recomendações", icon: TrendingUp },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: "16px 24px",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "transparent",
                  border: "none",
                  borderBottom:
                    activeTab === tab.id
                      ? "2px solid #2563eb"
                      : "2px solid transparent",
                  color: activeTab === tab.id ? "#2563eb" : "#6b7280",
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "24px" }}>
        {activeTab === "dashboard" && renderDashboard()}
        {activeTab === "busca" && renderBusca()}
        {activeTab === "emprestimos" && renderEmprestimos()}
        {activeTab === "recomendacoes" && renderRecomendacoes()}
      </div>

      <div
        style={{
          background: "#1f2937",
          color: "white",
          padding: "24px",
          marginTop: "48px",
        }}
      >
        <div
          style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}
        >
          <p style={{ fontSize: "14px" }}>
            <strong>Ferramentas:</strong> Trello (SCRUM) | GitHub
            (Versionamento) | Draw.io (Diagramas)
          </p>
          <p style={{ fontSize: "12px", color: "#9ca3af", marginTop: "8px" }}>
            Sprint 2 - LES
          </p>
        </div>
      </div>
    </div>
  );
}

export default BibliotecaDigital;
