/>
          </div>

          <p className="text-xs" style={{ color: "var(--text-dim)" }}>
            {t.chooseMethod}
          </p>

          <div className="flex gap-2.5">
            <button
              type="button"
              onClick={sendTelegram}
              className="flex-1 py-3 rounded-lg text-white font-bold flex items-center justify-center gap-2"
              style={{ background: "#0088cc" }}
            >
              <i className="fa-brands fa-telegram" /> {t.btnTg}
            </button>
            <button
              type="button"
              onClick={sendEmail}
              className="flex-1 py-3 rounded-lg text-white font-bold flex items-center justify-center gap-2"
              style={{ background: "#ea4335" }}
            >
              <i className="fa-solid fa-envelope" /> {t.btnMail}
            </button>
          </div>
        </form>

        <Link
          href="/"
          className="inline-block mt-5 font-bold no-underline"
          style={{ color: "var(--primary)" }}
        >
          <i className={lang === "ar" ? "fa-solid fa-arrow-right" : "fa-solid fa-arrow-left"} />{" "}
          {t.backLink}
        </Link>
      </div>
    </div>
  );
}