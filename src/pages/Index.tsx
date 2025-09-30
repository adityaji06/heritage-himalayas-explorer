import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { FeaturedMonasteries } from "@/components/FeaturedMonasteries";
import { Features } from "@/components/Features";
import { Stats } from "@/components/Stats";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedMonasteries />
      <Features />
      <Stats />
    </Layout>
  );
};

export default Index;
