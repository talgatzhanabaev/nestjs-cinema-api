until nc -z -v -w30 postgresql 5432; do
  echo "Waiting for database connection..."
  sleep 1
done

echo "Database is up, running prisma db push"
npx prisma db push

npm run start:prod