import { CardGrid } from '@/root/components/shared/CardGrid'
import { Emoji } from '@/root/components/shared/Emoji'
import { Layout } from '@/root/components/shared/Layout'

import type { CategoryType } from '@/root/types/category'
import type { PostType } from '@/root/types/post'

interface CategoryProps {
  category: CategoryType
  posts: PostType[]
  title: string
}

export function Category({ category, posts, title }: CategoryProps) {
  return (
    <Layout title={`Joy of Code | ${category}`}>
      <h1 className="mt-2 lg-mt-0">{title}</h1>
      <hr className="w-10 h-1 my-2 bg-gray-600 border-0"></hr>

      {posts.length < 1 && (
        <div className="flex gap-2 my-8">
          <p>Nothing to see here...</p>
          <Emoji emoji="🕵️" label="Spy emoji" />
        </div>
      )}

      <div className="my-12">
        <CardGrid posts={posts} />
      </div>
    </Layout>
  )
}
