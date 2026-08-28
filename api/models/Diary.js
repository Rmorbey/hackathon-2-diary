class Entry {
  constructor({ entry_id, title, content, entry_created_at, entry_updated_at }) {
    this.entry_id = entry_id;
    this.title = title;
    this.content = content;
    this.entry_created_at = entry_created_at
    this.entry_updated_at = entry_updated_at
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM diary");
    return response.rows.map((p) => new Entry(p));
  }

  static async getOneById(id) {
    const response = await db.query("SELECT * FROM diary WHERE entry_id = $1", [
      entry_id,
    ]);
    if (response.rows.length != 1) {
      throw new Error("Unable to locate post.");
    }
    return new Entry(response.rows[0]);
  }

  static async create(data) {
        const { title, content, entry_created_at = null, entry_updated_at = null } = data;
        let response = await db.query("INSERT INTO diary (title, content, entry_created_at) VALUES ($1, $2, $3) RETURNING entry_id;",
            [title, content, entry_created_at]);
        const newId = response.rows[0].entry_id;
        const newEntry = await Entry.getOneById(newId);
        return newEntry;
    }

    async destroy() {
        let response = await db.query("DELETE FROM diary WHERE entry_id = $1 RETURNING *;", [this.entry_id]);
        return new Entry(response.rows[0]);
    }
    
    async update(data) {
    const response = await db.query(
      "UPDATE diary SET content = $1 WHERE entry_id = $2 RETURNING entry_id, content;",
      [data.content, this.entry_id],
    );

    if (response.rows.length != 1) {
      throw new Error("Unable to update votes.");
    }

    return new Entry(response.rows[0]);
  }


    
}


module.exports = Entry