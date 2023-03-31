-- CreateTable
CREATE TABLE "Books" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "ISBN" SMALLINT,
    "author" VARCHAR,
    "title" VARCHAR,
    "publication_date" DATE,
    "series" VARCHAR,
    "description" VARCHAR,
    "contributor" VARCHAR,
    "contributor_note" VARCHAR,
    "publisher" VARCHAR,
    "amazon_product_url" VARCHAR,
    "book_image" VARCHAR,
    "book_image_width" SMALLINT,
    "book_image_height" SMALLINT,

    CONSTRAINT "Books_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "email" VARCHAR,
    "phone" SMALLINT,
    "first_name" VARCHAR DEFAULT '',
    "last_name" VARCHAR DEFAULT '',
    "username" VARCHAR NOT NULL DEFAULT '',
    "password" TEXT NOT NULL DEFAULT '',

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exchanges" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "user_a" BIGINT,
    "user_b" BIGINT,
    "status" BOOLEAN,
    "end_time" TIMESTAMPTZ(6),
    "book_a" BIGINT,
    "book_b" BIGINT,

    CONSTRAINT "exchanges_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "owned_books" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "ISBN" SMALLINT,
    "instance_of" BIGINT,
    "owner_id" BIGINT,

    CONSTRAINT "owned_books_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_id_key" ON "Users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_phone_key" ON "Users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "exchanges_id_key" ON "exchanges"("id");

-- CreateIndex
CREATE UNIQUE INDEX "owned_books_id_key" ON "owned_books"("id");

-- AddForeignKey
ALTER TABLE "exchanges" ADD CONSTRAINT "exchanges_user_a_fkey" FOREIGN KEY ("user_a") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "exchanges" ADD CONSTRAINT "exchanges_user_b_fkey" FOREIGN KEY ("user_b") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "owned_books" ADD CONSTRAINT "owned_books_instance_of_fkey" FOREIGN KEY ("instance_of") REFERENCES "Books"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "owned_books" ADD CONSTRAINT "owned_books_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
