CREATE TABLE IF NOT EXISTS visitas (
  id TEXT PRIMARY KEY,
  nome TEXT NOT NULL,
  data TEXT NOT NULL,
  criado_em INTEGER NOT NULL,
  atualizado_em INTEGER
);

CREATE INDEX IF NOT EXISTS idx_visitas_data ON visitas(data DESC);
CREATE INDEX IF NOT EXISTS idx_visitas_nome ON visitas(nome COLLATE NOCASE);