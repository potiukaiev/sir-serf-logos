import { Button, Card, CardContent, CardHeader, CardTitle } from "@repo/ui";
import { SeoHead, createSeoMeta } from "@repo/seo";
import { cn } from "@repo/utils";

function App() {
  const seoMeta = createSeoMeta({
    title: "Example Site - Built with Turborepo",
    description: "An example site demonstrating the shared component library and SEO utilities.",
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SeoHead meta={seoMeta} />
      
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Example Site</h1>
          <p className="text-muted-foreground">Built with shared components from @repo/ui</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Shared UI Components</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">This card uses the shared UI library from @repo/ui package.</p>
              <Button>Shared Button</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>SEO Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">SEO meta tags and structured data from @repo/seo package.</p>
              <Button variant="outline">Learn More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shared Utilities</CardTitle>
            </CardHeader>
            <CardContent>
              <p className={cn("mb-4", "text-primary")}>
                This uses the cn utility from @repo/utils package.
              </p>
              <Button variant="secondary">Utilities</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;