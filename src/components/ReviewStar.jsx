export default function ReviewStats() {
    return (
      <div className="py-8">
        <div>
          <div className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                reviews on 10,000+ on
              </span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <span>TrustPilot</span>
              <span>•</span>
              <span>G2</span>
              <span>•</span>
              <span>Capterra</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  